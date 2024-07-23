import { PieChart } from '@mui/x-charts/PieChart';
export default function chart() {
    return (
        <>
            <div className='my'>
                <div className='chart' >
                    <p className='mui'> MONTHLY SPENDING CHART </p>
                    <p className=''></p>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'FOOD ' },
                                    { id: 1, value: 15, label: 'CLOTHING' },
                                    { id: 2, value: 15, label: ' TRAVEL' },
                                    { id: 3, value: 20, label: ' SCHOOL' },
                                    { id: 4, value: 35, label: ' MOVIE' },
                                ],
                            },
                        ]}
                        width={500}
                        height={300}

                    />
                </div>
                <div className='table'>
                    <table border="1">
                        <tr>
                            <th>DAYS </th>
                            <th>SPENDING</th>
                            <th> INCOME</th>
                        </tr>
                        <tr>
                            <td> 1 MONTHS </td>
                            <td>25.000$</td>
                            <td>20.000$</td>
                        </tr>
                        <tr>
                            <td> 1 YEAR </td>
                            <td>30.000.$</td>
                            <td>65.000$</td>
                        </tr>
                        <tr>
                            <td>SYNTHETIC </td>
                            <td>22.000$</td>
                            <td>35.000$</td>
                        </tr>
                    </table>
                </div>
            </div>

        </>
    )
}