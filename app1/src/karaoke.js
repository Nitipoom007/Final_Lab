//Nitipoom Gongfu 6603052421160
import React, { useRef, useState } from 'react';

function Karaoke() {
    const [totalAmount, setTotalAmount] = useState(0);
    const noStudentCardHours = useRef();
    const studentCardHours = useRef();
    const noStudentCardRadio = useRef();
    const studentCardRadio = useRef();

    const calculateTotal = () => {
        const noCardHoursValue = noStudentCardHours.current.value;
        const cardHoursValue = studentCardHours.current.value;
        const noCardRatePerHour = 120;
        const cardRatePerHour = 80;
        
        let calculatedTotal = 0;

        if (noStudentCardRadio.current.checked) {
            if (noCardHoursValue === "") {
                alert("กรุณากรอกจำนวนชั่วโมง");
                return;
            }
            calculatedTotal = noCardHoursValue * noCardRatePerHour;

        } else if (studentCardRadio.current.checked) {
            if (cardHoursValue === "") {
                alert("กรุณากรอกจำนวนชั่วโมง");
                return;
            }
            calculatedTotal = cardHoursValue * cardRatePerHour;
        }

        setTotalAmount(calculatedTotal);
    };

    const borderStyle = {
        border: '2px solid #000000',
        width: '400px',
    };

    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <table border="2" style={borderStyle}>
                <tbody>
                    <tr><td colSpan="2" id="karaoke">ร้านคาราโอเกะ</td></tr>
                    <tr>
                        <td>
                            <br />&nbsp;&nbsp;
                            <input type="radio" name="c1" ref={noStudentCardRadio} /> ไม่มีบัตรนักศึกษา <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน 
                            <input type="text" size="2" ref={noStudentCardHours} /> ชั่วโมง <br />
                            &nbsp;&nbsp;
                            <input type="radio" name="c1" ref={studentCardRadio} /> มีบัตรนักศึกษา <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน 
                            <input type="text" size="2" ref={studentCardHours} /> ชั่วโมง <br /><br />
                        </td>
                    </tr>
                </tbody>
            </table><br />
            <button onClick={calculateTotal}>คิดเงิน</button><br />
            รวมเป็นเงินทั้งสิ้น = <input type="text" value={totalAmount} readOnly /> บาท
        </div>
    );
}

export default Karaoke;
// <Karaoke />