import { db } from "../../firebaseConfig";

//Documento
const planReference = db.collection("planos")

//Função de adicionar no documento
export async function addPlanAcess(body: any) {
    const response = await planReference.add(body)

    return response
}

//editar e colocar documentos
export async function setPlanAcess(body: any, id: string) {
    const response = await planReference.doc(id).set(body)

    return response
}

export async function updatePlanAcess(body: any, id: string) {
    const response = await planReference.doc(id).update(body)

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