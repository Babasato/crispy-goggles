import { prisma } from '@/lib/prisma'

export default async function Home() {
  const proverb = await prisma.proverb.findFirst()

  if (!proverb) {
    return <div>No proverbs found</div>
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        African Proverbs Online
      </h1>
      
      <div style={{ 
        border: '1px solid #E0E0E0', 
        padding: '2rem', 
        borderRadius: '8px',
        backgroundColor: '#F8F9FA'
      }}>
        <p style={{ 
          fontSize: '1.5rem', 
          fontStyle: 'italic',
          marginBottom: '1rem',
          color: '#2C3E50'
        }}>
          "{proverb.text}"
        </p>
        
        <p style={{ 
          fontSize: '1.2rem',
          marginBottom: '1rem',
          color: '#555'
        }}>
          {proverb.translation}
        </p>
        
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Language:</strong> {proverb.language}
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Country:</strong> {proverb.country}
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Region:</strong> {proverb.region}
        </p>
        
        <p style={{ marginBottom: '1rem' }}>
          <strong>Meaning:</strong> {proverb.meaning}
        </p>
        
        {proverb.culturalContext && (
          <p style={{ 
            fontStyle: 'italic',
            color: '#666',
            borderLeft: '3px solid #D4735E',
            paddingLeft: '1rem'
          }}>
            {proverb.culturalContext}
          </p>
        )}
      </div>
      
      <p style={{ marginTop: '2rem', color: '#666' }}>
        ✅ Database connected successfully!
      </p>
    </main>
  )
}