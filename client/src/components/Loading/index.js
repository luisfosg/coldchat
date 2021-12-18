import Image from 'next/image'

const Loading = () => {
  return (
    <div>
      <Image src='/loading.svg' width={250} height={150} alt="Loading" />
    </div>
  )
}

export default Loading
