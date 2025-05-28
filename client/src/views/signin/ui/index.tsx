import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Signin = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <main className="flex items-center w-[49rem] h-[26rem] rounded-[0.5rem] bg-primary-700 overflow-hidden">
        <form className="flex flex-col w-full gap-12 mx-8 text-white">
          <h2 className="text-3xl font-bold text-white">Dinocord</h2>
          <Input placeholder="이름을 입력하세요..." />
          <Input placeholder="비밀번호를 입력하세요..." />
          <Button className="bg-secondary-100">로그인</Button>
        </form>
        <section className="w-[19rem] h-full bg-white"></section>
      </main>
    </div>
  )
}

export default Signin