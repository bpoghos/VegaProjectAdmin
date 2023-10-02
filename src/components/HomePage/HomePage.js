import { Typography } from 'antd'
import { FaPlus, FaFileLines } from 'react-icons/fa6'
import './home-page.css'

const { Title } = Typography

const titleStyle = {
    color: '#ffffff',
    margin: 0,
    textAlign: 'center',
    paddingTop: '40px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold'
}

const HomePage = () => {
    return (
        <div className='home-page'>
            <Title style={titleStyle}>VEGA PROJECT ADMIN</Title>
            <div className='buttons-components'>
                <div className='btn-comp'>
                    <FaPlus className='plus icon' />
                </div>
                <div className='btn-comp'>
                    <FaFileLines className='files icon' />
                </div>
            </div>
        </div>
    )
}

export default HomePage