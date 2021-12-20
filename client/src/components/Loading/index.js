import Image from 'next/image'

const Loading = () => {
  return (
    <div>
      <Image src='/loading.svg' width={250} height={100} alt="Loading" />
    </div>
  )
}

export default Loading
