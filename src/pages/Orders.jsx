import React from 'react';
import {
    GridComponent, ColumnsDirective, ColumnDirective,
    Inject, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport
} from '@syncfusion/ej2-react-grids';


import Header from "../components/Header";
import { ordersGrid, ordersData } from '../data/dummy';

const Orders = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Orders" />
            <GridComponent
                id='gridComp'
                dataSource={ordersData}
                allowPaging
                allowSorting
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>


        </div>

    )
}

export default Orders