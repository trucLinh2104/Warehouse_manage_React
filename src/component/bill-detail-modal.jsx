import '../assets/css/bill-detail-modal.css'
import {useEffect} from 'react';

function BillDetailModal({data, onClose, billNo}) {
    useEffect(() => {
        const modal_area = document.querySelector('#modal-detail');

        const handleClickOutside = (e) => {
            if (!e.target.closest('.modal-container')) {
                onClose(); // Đóng modal khi click ra ngoài
            }
        };

        modal_area.addEventListener('click', handleClickOutside);

        // Cleanup khi component bị unmount hoặc modal đóng
        return () => {
            modal_area.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);
    console.log("billNos", billNo);

    const col =  ['Mã Sp','Tên Sp','Loại','Giá','Số lượng','Ncc', 'Ngày nhập'];
    console.log(col);

    return (<>
        <div id="modal-detail">
            <div className="modal-container">
                <div className="modal-header">Detail Bill {billNo}</div>
                <div className="modal-body">
                    <table>
                        <thead>
                      <tr>
                          {col.map((key, index) => (
                              <th key={index}>{key}</th>
                          ))}
                      </tr>
                        </thead>
                        <tbody>
                        <tr data-masp="SP001">
                            <td>SP001</td>
                            <td>Sản phẩm A</td>
                            <td>Điện tử</td>
                            <td>2,000,000</td>
                            <td>10</td>
                            <td>Cty ABC</td>
                            <td>2025-05-01</td>

                        </tr>
                        <tr data-masp="SP001">
                            <td>SP001</td>
                            <td>Sản phẩm A</td>
                            <td>Điện tử</td>
                            <td>2,000,000</td>
                            <td>10</td>
                            <td>Cty ABC</td>
                            <td>2025-05-01</td>

                        </tr>
                        <tr data-masp="SP001">
                            <td>SP001</td>
                            <td>Sản phẩm A</td>
                            <td>Điện tử</td>
                            <td>2,000,000</td>
                            <td>10</td>
                            <td>Cty ABC</td>
                            <td>2025-05-01</td>

                        </tr>
                        <tr data-masp="SP001">
                            <td>SP001</td>
                            <td>Sản phẩm A</td>
                            <td>Điện tử</td>
                            <td>2,000,000</td>
                            <td>10</td>
                            <td>Cty ABC</td>
                            <td>2025-05-01</td>

                        </tr>
                        <tr data-masp="SP001">
                            <td>SP001</td>
                            <td>Sản phẩm A</td>
                            <td>Điện tử</td>
                            <td>2,000,000</td>
                            <td>10</td>
                            <td>Cty ABC</td>
                            <td>2025-05-01</td>

                        </tr>

                        </tbody>
                        <tfoot>
                        <tr data-masp="SP001">
                            <td colSpan="6">TỔNG</td>
                            <td colSpan="2">10.000.000</td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="modal-foot">
                    <button className="close-btn" onClick={onClose}>Đóng</button>
                </div>
            </div>
        </div>

    </>)
}
export default BillDetailModal;