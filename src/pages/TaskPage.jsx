import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate()

 

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px]  space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={()=> navigate(-1)} className="text-slate-100  absolute left-0 top-0 bottom-0 " > <ChevronLeftIcon/></button>
        <Title >
          Detalhes da Tarefa
        </Title>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h1 className="text-2xl text-slate-950 font-bold text-center">{title}</h1>
          <p className="text-white p-4">{description.charAt(0).toUpperCase()+String(description).slice(1) + "."}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
