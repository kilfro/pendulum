import React from 'react'
import '@style/control.less'

const Control = () => {
    return (
        <div className="control">
            <div className="control-group">
                <label htmlFor="thread-length">Длина подвеса</label>
                <input type="range" name="thread-length"/>
            </div>
            <div className="control-group">
                <label htmlFor="ball-weight">Вес груза</label>
                <input type="range" name="ball-weight"/>
            </div>
            <div className="control-group">
                <label htmlFor="gravity">Сила притяжения</label>
                <input type="range" name="gravity"/>
            </div>
            <div className="control-group">
                <label htmlFor="momentum">Начальный импульс</label>
                <input type="range" name="momentum"/>
            </div>
        </div>
    )
}

export default Control