import axios from "axios"
import { useState } from "react"

const DownloadButton = () =>{
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            month: month,
            year: year
        };
        axios({
            url:'http://127.0.0.1:5000/download_report_file/',
            method:'POST',
            data: data,
            responseType:'blob'
        })
        .then((res)=>{
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `report-${month}-${year}.csv`)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
        .catch((error)=>{
            console.error('Error downloading file:', error)
        })

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Month</label>
                    <input type="text" value={month} onChange={(e)=>setMonth(e.target.value)}/>
                </div>
                <div>
                    <label>Year</label>
                    <input type="text" value={year} onChange={(e)=>setYear(e.target.value)}/>
                </div>
                <button type="submit">Download Report</button>
            </form>
        </div>
    )
}
export default DownloadButton