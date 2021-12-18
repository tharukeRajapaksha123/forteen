import { useEffect, useState } from 'react'
import { db } from '../firebase'
function useFetchSales() {
    const [sales, setSales] = useState([])
    useEffect(() => {
        db.collection("Sale").get().then(snapshot => {
            const s = [];
            snapshot.docs.forEach((doc) => {
                const sale = {
                    "id": doc.id,
                    "discountType": doc.data()["discountType"],
                    "endDate": doc.data()["endDate"],
                    "image": doc.data()["image"],
                    "msg": doc.data()["msg"],
                    "saleItems": doc.data()["saleItems"],
                    "salename": doc.data()["salename"],
                    "startDate": doc.data()["startDate"],
                }
                //console.log(sale)
                s.push(sale)
            })
            setSales(s)
        })

    }, [])
    return {sales};
}

export default useFetchSales
