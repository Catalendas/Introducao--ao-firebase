import { addPlanAcess, getPlanAcess, setPlanAcess, updatePlanAcess } from "../plansAcess";

export async function addPlansAction(body: any) {
    const response = await addPlanAcess(body)
    return response.id
}

export async function setPlansAction(body: any, id: string) {
    const response = await setPlanAcess(body, id)
    return response
}

export async function updatePlansAction(body: any, id: string) {
    const response = await updatePlanAcess(body, id)
    return response
}

export async function getPlansAction() {
    const response = await getPlanAcess()
    return response
}