import { PlanType } from "../../../interfaces/plansInterfaces";
import { addPlanAcess, deletePlanAcess, getPlanAcess, setPlanAcess, updatePlanAcess } from "../plansAcess";

export async function addPlansAction(body: PlanType) {
    const response = await addPlanAcess(body)
    return response.id
}

export async function setPlansAction(body: PlanType, id: string) {
    const response = await setPlanAcess(body, id)
    return response
}

export async function updatePlansAction(body: PlanType, id: string) {
    const response = await updatePlanAcess(body, id)
    return response
}

export async function getPlansAction() {
    const response = await getPlanAcess()
    return response
}

export async function deletePlansAction(id:string) {
    const response = await deletePlanAcess(id)
    return response
}