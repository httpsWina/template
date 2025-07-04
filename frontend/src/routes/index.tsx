import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <span>{data?.message}</span>
    </div>
  )
}