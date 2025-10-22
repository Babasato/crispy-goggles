import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create test user
  const user = await prisma.user.create({
    data: {
      email: 'test@africanproverbs.online',
      password: 'hashedpassword', // We'll implement proper hashing with NextAuth later
      name: 'Test User',
      region: 'EAST',
    },
  })

  // Create test proverb
  await prisma.proverb.create({
    data: {
      text: 'Haraka haraka haina baraka',
      translation: 'Haste has no blessing',
      language: 'Swahili',
      country: 'Kenya',
      region: 'EAST',
      meaning: 'This proverb warns against rushing through tasks without proper care and attention. It emphasizes that quality and thoughtfulness are more valuable than speed.',
      culturalContext: 'Widely used across East Africa, this proverb reflects the cultural value of patience and careful deliberation in decision-making.',
      themes: ['wisdom', 'patience', 'quality'],
      verified: true,
      submittedBy: user.id,
    },
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })