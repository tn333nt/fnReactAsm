import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setValues } from "../../redux/action"

export default function Form(props) {
    const dispatch = useDispatch()

    const values = useSelector(state => state.values)
    const staffs = useSelector(state => state.staffs)
    const [option, setOption] = useState("sale")

    const handleInputChange = (e) => {
        dispatch(setValues({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    console.log(values)
    console.log(option)

    const handleOptionChange = (e) => {
        setOption(e.target.value)
    }

    const handleSubmit = () => {
        // props.handleHideFormAdd() || props.handleHideFormUpdate()
        props.handleHideFormAdd() ? props.handleHideFormAdd() : props.handleHideFormUpdate()

        props.handleAddStaff()

        const newValues = {
            id: staffs.length,
            name: values.name,
            doB: values.doB,
            salaryScale: values.salaryScale,
            startDate: values.startDate,
            department: option,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            image: '/assets/images/alberto.png',
        }

        dispatch(setValues(newValues))
        // giờ để clear input fields thì lại tạo thêm 1 state nữa lưu trữ only hả =)

        console.log(newValues)

        if (!values.name || !values.doB || !values.salaryScale) {
            dispatch(setValues({}))
            return;
        }
    }

    return (
        <div className="background_ShowForm">
            <div className="container_ShowForm">
                <div className="nav_Form">
                    <h2>
                        {" "}Thêm nhân viên{" "}
                        <span><button onClick={props.handleHideFormAdd || props.handleHideFormUpdate}>X</button></span>
                    </h2>
                    <hr />
                </div>
                <div className="container_Form">
                    <div className="item_Form">
                        <label htmlFor="name">Tên</label>
                        <input
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            id="name"
                            type="text"
                        />
                    </div>

                    <div className="item_Form">
                    </div>
                    <div className="item_Form">
                        <label htmlFor="doB">Ngày sinh</label>
                        <input
                            name="doB"
                            value={values.doB}
                            onChange={handleInputChange}
                            id="doB"
                            type="date"
                        />
                    </div>

                    <div className="item_Form">
                        <label htmlFor="startDate">Ngày vào công ty</label>
                        <input
                            name="startDate"
                            value={values.startDate}
                            onChange={handleInputChange}
                            id="startDate"
                            type="date"
                        />
                    </div>

                    <div className="item_Form">
                        <label htmlFor="department">Phòng ban </label>
                        <select
                            name="department"
                            value={option}
                            onChange={handleOptionChange}
                            id="department"
                        >
                            <option value="sale">sale</option>
                            <option value="hr">hr</option>
                            <option value="marketing">marketing</option>
                            <option value="it">it</option>
                            <option value="finance">finance</option>
                        </select>
                    </div>
                    <div className="item_Form">
                        <label htmlFor="salaryScale">Hệ số lương</label>
                        <input
                            name="salaryScale"
                            value={values.salaryScale}
                            onChange={handleInputChange}
                            id="salaryScale"
                            type="number"
                            placeholder="1.0->3.0"
                        />
                    </div>

                    <div className="item_Form">
                        <label htmlFor="annualLeave">Số ngày nghỉ còn lại</label>
                        <input
                            name="annualLeave"
                            value={values.annualLeave}
                            onChange={handleInputChange}
                            id="annualLeave"
                            type="number"
                            placeholder="0"
                        />
                    </div>

                    <div className="item_Form">
                        <label htmlFor="overTime">Số ngày đã làm thêm</label>
                        <input
                            name="overTime"
                            value={values.overTime}
                            onChange={handleInputChange}
                            id="overTime"
                            type="number"
                            placeholder="0"
                        />
                    </div>

                </div>
                <button
                    className="btn_ShowForm"
                    onClick={handleSubmit}
                > Thêm </button>
            </div>
        </div>
    )
}