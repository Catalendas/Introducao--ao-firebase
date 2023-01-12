import React from "react";
import { db } from "../../firebaseConfig";
import { PlanGetType } from "../../interfaces/plansInterfaces";

const plansReference = db.collection("planos")

export function getPlansObserver(callback: React.Dispatch<React.SetStateAction<PlanGetType[]>>, plansType: string[], gymId: string){
    const gymReference = db.collection("academias").doc(gymId)
    plansReference.where("type", 'in', plansType).where("gym", "==", gymReference).onSnapshot((snapshot) => {
        const plans: PlanGetType[] = []
        snapshot.forEach((doc) => {
            plans.push({...(doc.data() as PlanGetType),
                id: doc.id
            })
        })

        callback(plans)
    })
}