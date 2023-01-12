import { useEffect, useState } from "react";
import { Button } from "../../commons/Buttoon";
import { PlansTable } from "../../components/PlansTable";
import { PlanGetType } from "../../interfaces/plansInterfaces";
import { addPlansAction } from "../../services/dataAcess/actions/plansActions";
import { getPlansObserver } from "../../services/observers/plansObservers";

export function PlansPage() {

    const [plans, setPlans] = useState<PlanGetType[]>([])

    useEffect(() => {
      // Ler os elementos
      // getPlansAction()
      // .then(res => {
      //   console.log(res)
      // })
  
      // Ler em tempo real os elementos
      getPlansObserver(setPlans, ["month", "year"], "QvA6Ik18chziwJV0uycm")
    }, [])

    return (
        <div className="plans-page-container">

            <PlansTable plans={plans} />

            <Button text='Adicionar' onClick={() => addPlansAction({
                text: "Mensal",
                type: "month",
                value:  35,
                gymId: "QvA6Ik18chziwJV0uycm",
            })}/>
        </div>
    )
}