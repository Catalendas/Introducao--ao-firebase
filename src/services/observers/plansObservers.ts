import React from "react";
import { db } from "../../firebaseConfig";

const plansReference = db.collection("planos")

export function getPlansObserver(callback: React.Dispatch<React.SetStateAction<any[]>>){
    plansReference.onSnapshot((snapshot) => {
        const plans: any[] = []
        snapshot.forEach((doc) => {
            plans.push(doc.data())
        })

        callback(plans)
    })
}