import './index.css'
import {useEffect} from 'react';

function Index({data, col, onClose, billNo}) {
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
    console.log("Data nhận được ừ table", data);



    return (<>
        <div id="modal-detail" className="hidden lg:flex">
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
                        {data.map((row, i) => {
                            const values = Object.values(row);   // lấy giá trị của từng hàng

                            return (
                                <tr key={i}>
                                    {values.map((val, j) => (
                                        <td key={j}>{val}</td>
                                    ))}
                                </tr>
                            );
                        })}

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
export default Index;