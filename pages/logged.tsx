export default function LoggedPage() {
  return (
    <div>
      <h1>Welcome to the Logged Page</h1>
      <p>This is a simple home page for your Next.js application.</p>
      <p>You can add more content here as needed.</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {},
  }
}
