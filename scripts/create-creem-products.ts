/**
 * Creem 产品批量创建脚本
 *
 * 用法：
 *   1. 在 .env.local 中填入真实的 CREEM_API_KEY 和 CREEM_API_URL
 *   2. 运行: npx tsx scripts/create-creem-products.ts
 *   3. 脚本会创建 6 个产品，并输出对应的 productId
 *   4. 将输出的 productId 回填到 config/subscriptions.ts
 */
import { createCreem } from "creem_io";

const creem = createCreem({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: process.env.CREEM_TEST_MODE === "true",
});

const successUrl = process.env.CREEM_SUCCESS_URL || "http://localhost:3000/dashboard";

// 3 个订阅产品（按月 recurring）
const subscriptionProducts = [
  {
    key: "tier-basic",
    name: "PixelForge Basic (Monthly)",
    description: "100 image credits per month, standard resolution (1024x1024), 5 artistic styles, no watermarks, commercial use license, email support.",
    price: 900, // $9.00
  },
  {
    key: "tier-pro",
    name: "PixelForge Pro (Monthly)",
    description: "500 image credits per month, high resolution (2048x2048), 20+ artistic styles, priority generation speed, commercial use license, priority email support, API access.",
    price: 2900, // $29.00
  },
  {
    key: "tier-enterprise",
    name: "PixelForge Enterprise (Monthly)",
    description: "2000 image credits per month, 4K resolution (4096x4096), all artistic styles, fastest generation speed, commercial use license, dedicated account manager, full API access, custom fine-tuning.",
    price: 9900, // $99.00
  },
];

// 3 个积分包产品（一次性 onetime）
const creditProducts = [
  {
    key: "tier-50-credits",
    name: "PixelForge Starter Pack (50 Credits)",
    description: "50 image credits, standard resolution (1024x1024), 10 artistic styles, no expiration date, commercial use license.",
    price: 500, // $5.00
  },
  {
    key: "tier-200-credits",
    name: "PixelForge Creator Pack (200 Credits)",
    description: "200 image credits, high resolution (2048x2048), all artistic styles, no expiration date, commercial use license, priority support.",
    price: 1900, // $19.00
  },
  {
    key: "tier-1000-credits",
    name: "PixelForge Pro Pack (1000 Credits)",
    description: "1000 image credits, 4K resolution (4096x4096), all artistic styles, no expiration date, commercial use license, priority generation speed, premium support.",
    price: 7900, // $79.00
  },
];

async function createAll() {
  const results: Record<string, string> = {};

  console.log("\n=== 创建订阅产品 (recurring) ===\n");
  for (const p of subscriptionProducts) {
    try {
      const product = await creem.products.create({
        name: p.name,
        description: p.description,
        price: p.price,
        currency: "USD",
        billingType: "recurring",
        billingPeriod: "every-month",
        taxMode: "exclusive",
        taxCategory: "saas",
        defaultSuccessUrl: successUrl,
      });
      results[p.key] = product.id;
      console.log(`✓ ${p.key} -> ${product.id}  (${p.name})`);
    } catch (err: any) {
      console.error(`✗ ${p.key} 失败:`, err.message || err);
    }
  }

  console.log("\n=== 创建积分包产品 (onetime) ===\n");
  for (const p of creditProducts) {
    try {
      const product = await creem.products.create({
        name: p.name,
        description: p.description,
        price: p.price,
        currency: "USD",
        billingType: "onetime",
        taxMode: "exclusive",
        taxCategory: "saas",
        defaultSuccessUrl: successUrl,
      });
      results[p.key] = product.id;
      console.log(`✓ ${p.key} -> ${product.id}  (${p.name})`);
    } catch (err: any) {
      console.error(`✗ ${p.key} 失败:`, err.message || err);
    }
  }

  console.log("\n=== 完成！请将以下 productId 回填到 config/subscriptions.ts ===\n");
  for (const [key, id] of Object.entries(results)) {
    console.log(`  ${key}: "${id}",`);
  }
  console.log("");
}

createAll().catch((err) => {
  console.error("脚本执行失败:", err);
  process.exit(1);
});
