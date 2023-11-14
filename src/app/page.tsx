"use client"
import { useEffect, useState } from "react"
import { publicClient } from "./client"

export default function Home() {
    const [currentBlock, setCurrentBlock] = useState({})

    useEffect(() => {
        publicClient.watchBlocks({
            includeTransactions: true,
            onBlock: (block) => setCurrentBlock(block)
        })
    }, [])

    useEffect(() => {
        console.log(currentBlock)
    }, [currentBlock])

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
    )
}
