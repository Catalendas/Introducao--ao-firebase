import { db } from "../../firebaseConfig";
import { PlanAddType, PlanType } from "../../interfaces/plansInterfaces";

//Documento
const planReference = db.collection("planos")

//Função de adicionar no documento
export async function addPlanAcess(body: PlanType) {
    const planObject: PlanAddType = {
        text: body.text,
        value: body.value,
        type: body.type,
        gym: db.collection("academias").doc(body.gymId)
    }
    const response = await planReference.add(planObject)

    return response
}

//editar e colocar documentos
export async function setPlanAcess(body: PlanType, id: string) {

    const planObject: PlanAddType = {
        text: body.text,
        value: body.value,
        type: body.type,
        gym: db.collection("academias").doc(body.gymId)
    }
    const response = await planReference.doc(id).set(planObject)

    return response
}

export async function updatePlanAcess(body: PlanType, id: string) {

    const planObject: PlanAddType = {
        text: body.text,
        value: body.value,
        type: body.type,
        gym: db.collection("academias").doc(body.gymId)
    }
    const response = await planReference.doc(id).update(planObject)

    return response
}

export async function getPlanAcess() {
    const response = await planReference.get()

    const plans: any[] = []
    response.forEach((doc) => {
        plans.push(doc.data())
    })

    return plans
    
}

export async function deletePlanAcess(id:string) {
    const response = await planReference.doc(id).delete()
    
}