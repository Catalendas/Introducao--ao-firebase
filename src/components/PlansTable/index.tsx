import { Button } from '../../commons/Buttoon'
import { PlanGetType } from '../../interfaces/plansInterfaces'
import { deletePlansAction } from '../../services/dataAcess/actions/plansActions'
import './style.css'

interface IProps {
    plans: PlanGetType[]
}
export function PlansTable({plans}: IProps) {
    return (
        <>
            <table className='plans-table-container'>
                <tr className='plans-table-header'>
                    <th>Tipo</th>
                    <th>Preço</th>
                    <th>Actions</th>
                </tr>
                    {plans.map(plan => (
                        <tr key={plan.id} className="plans-table-body">
                            <td>
                                <p>{plan.text}</p>      
                            </td>
                            <td>
                                R${plan.value},00
                            </td>
                            <td>
                                <Button text='Delete' onClick={() => deletePlansAction(plan.id)}/>
                            </td>
                        </tr>
                    ))}
            </table>
        </>
    )
}