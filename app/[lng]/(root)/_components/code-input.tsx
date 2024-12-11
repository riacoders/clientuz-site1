import React, { useEffect, useRef, useState } from 'react'

interface IProps {
	callback: boolean
	reset: number
	isLoading: boolean
	onCodeChange: (code: string[]) => void
}

export default function CodeInput({ reset, onCodeChange }: IProps) {
	const [code, setCode] = useState<string[]>(Array(6).fill(''))
	const inputRefs = Array.from({ length: 6 }, () =>
		useRef<HTMLInputElement | null>(null)
	)

	// Kodni qayta tiklash funksiyasi
	const resetCode = () => {
		const clearedCode = Array(6).fill('')
		setCode(clearedCode)
		onCodeChange(clearedCode)
		inputRefs[0].current?.focus()
	}

	// Reset qiymati o'zgarganda kodni tozalash
	useEffect(() => {
		resetCode()
	}, [reset])

	// Input o'zgarishini boshqarish
	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const value = e.target.value
		if (!/^[0-9a-zA-Z]$/.test(value)) return

		const updatedCode = [...code]
		updatedCode[index] = value
		setCode(updatedCode)
		onCodeChange(updatedCode)

		if (value && index < 5) {
			inputRefs[index + 1].current?.focus()
		}
	}

	// Backspace tugmasini boshqarish
	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === 'Backspace') {
			if (code[index]) {
				const updatedCode = [...code]
				updatedCode[index] = ''
				setCode(updatedCode)
			} else if (index > 0) {
				const updatedCode = [...code]
				updatedCode[index - 1] = ''
				setCode(updatedCode)
				inputRefs[index - 1].current?.focus()
			}
		}
	}

	// Paste funksiyasini boshqarish
	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault()
		const pastedData = e.clipboardData.getData('text').slice(0, 6)
		const newCode = pastedData.split('').slice(0, 6)
		setCode(newCode)
		onCodeChange(newCode)

		newCode.forEach((char, i) => {
			if (inputRefs[i].current) {
				inputRefs[i].current!.value = char
			}
		})

		const nextEmptyIndex = newCode.findIndex(char => char === '')
		if (nextEmptyIndex !== -1) {
			inputRefs[nextEmptyIndex].current?.focus()
		} else {
			inputRefs[5].current?.focus()
		}
	}

	return (
		<div className='mt-2 flex flex-row items-center justify-center gap-2'>
			{Array.from({ length: 6 }, (_, index) => (
				<input
					key={index}
					type='text'
					maxLength={1}
					value={code[index]}
					onChange={e => handleInput(e, index)}
					ref={inputRefs[index]}
					onKeyDown={e => handleKeyDown(e, index)}
					onPaste={handlePaste}
					className='w-12 rounded-sm border-2 border-gray-300 p-2 text-center text-xl outline-none focus:border-[#2A9D8F]'
				/>
			))}
		</div>
	)
}
