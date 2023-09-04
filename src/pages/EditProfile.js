import React, { useState,useEffect} from 'react'
import { useClientsContext } from "../hooks/useClientsContext"
import { useNavigate, useParams } from "react-router-dom";


function EditProfile() {
    const { id } = useParams();
    const navigate = useNavigate()
    const { dispatch } = useClientsContext()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [visaType, setVisaType] = useState("")
    const [office, setOffice] = useState("")
    const [caseStatus, setCaseStatus] = useState("")
    const [dob, setDob] = useState("")
    const [placeOfBirth, setPlaceOfBirth] = useState("")
    const [sex, setSex] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [passportNumber, setPassportNumber] = useState("")
    const [passportDateIssue, setPassportDateIssue] = useState("")
    const [passportDateExpiry, setPassportDateExpiry] = useState("")
    const [tenthScore, setTenthScore] = useState("")
    const [tenthScoreSchema, setTenthScoreSchema] = useState("")
    const [tenthBoard, setTenthBoard] = useState("")
    const [tenthSchoolName, setTenthSchoolName] = useState("")
    const [tenthSchoolAddress, setTenthSchoolAddress] = useState("")
    const [tenthPassingDate, setTenthPassingDate] = useState("")
    const [twelthScore, setTwelthScore] = useState("")
    const [twelthScoreSchema, setTwelthScoreSchema] = useState("")
    const [twelthBoard, setTwelthBoard] = useState("")
    const [twelthSchoolName, setTwelthSchoolName] = useState("")
    const [twelthSchoolAddress, setTwelthSchoolAddress] = useState("")
    const [twelthPassingDate, setTwelthPassingDate] = useState("")
    const [workExperience, setWorkExperience] = useState("")

    useEffect(() => {
        const fetchClients = async () => {
        const response = await fetch(`https://client-list-backend-snse.onrender.com/api/cases/${id}`
        )
  
        const json = await response.json()
  
        if(response.ok){
            setFirstName(json.firstName)
            setLastName(json.lastName)
            setMaritalStatus(json.maritalStatus)
            setVisaType(json.visaType)
            setOffice(json.office)
            setCaseStatus(json.caseStatus)
            setPlaceOfBirth(json.placeOfBirth)
            setDob(json.dob)
            setSex(json.sex)
            setAddress(json.address)
            setCity(json.city)
            setState(json.state)
            setPincode(json.pincode)
            setPhoneNumber(json.phoneNumber)
            setPassportNumber(json.passportNumber)
            setPassportDateIssue(json.passportDateIssue)
            setPassportDateExpiry(json.passportDateExpiry)
            setTenthScore(json.tenthScore)
            setTenthScoreSchema(json.tenthScoreSchema)
            setTenthBoard(json.tenthBoard)
            setTenthSchoolName(json.tenthSchoolName)
            setTenthSchoolAddress(json.tenthSchoolAddress)
            setTenthPassingDate(json.tenthPassingDate)
            setTwelthScore(json.twelthScore)
            setTwelthScoreSchema(json.twelthScoreSchema)
            setTwelthBoard(json.twelthBoard)
            setTwelthSchoolName(json.twelthSchoolName)
            setTwelthSchoolAddress(json.twelthSchoolAddress)
            setTwelthPassingDate(json.twelthPassingDate)
            setWorkExperience(json.workExperience)
        }
        }
        
        fetchClients()

        
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const clients = {firstName,lastName,maritalStatus,visaType,office,caseStatus,dob,placeOfBirth,sex,address,city,state,pincode,phoneNumber,passportNumber,passportDateIssue,passportDateExpiry,tenthScore,tenthScoreSchema,tenthBoard,tenthSchoolName,tenthSchoolAddress,tenthPassingDate,twelthScore,twelthScoreSchema,twelthBoard,twelthSchoolName,twelthSchoolAddress,twelthPassingDate,workExperience}

        const response = await fetch(`https://client-list-backend-snse.onrender.com/api/cases/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(clients),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const json = await response.json()

        if(!response.ok){
            alert('Something went wrong')
        }
        if(response.ok){
            setFirstName("")
            setLastName("")
            setMaritalStatus("")
            setVisaType("")
            setOffice("")
            setCaseStatus("")
            setPlaceOfBirth("")
            setDob("")
            setSex("")
            setAddress("")
            setCity("")
            setState("")
            setPincode("")
            setPhoneNumber("")
            setPassportNumber("")
            setPassportDateIssue("")
            setPassportDateExpiry("")
            setTenthScore("")
            setTenthScoreSchema("")
            setTenthBoard("")
            setTenthSchoolName("")
            setTenthSchoolAddress("")
            setTenthPassingDate("")
            setTwelthScore("")
            setTwelthScoreSchema("")
            setTwelthBoard("")
            setTwelthSchoolName("")
            setTwelthSchoolAddress("")
            setTwelthPassingDate("")
            setWorkExperience("")
            console.log('Client Edited ',json)
            navigate('/')
        }
    }

    return (
        <div className='client-form-main'>
            <form onSubmit={handleSubmit}>
                <div className='form-heading'><h1>Edit Client Profile</h1></div>
                <div className='part1'>
                    <div className='common'>
                        <label>First Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div className='common'>
                        <label>Last Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                    <div className='common'>
                        <label>Sex</label>
                        <select 
                            id='sex'
                            onChange={(e) => setSex(e.target.value)}
                            value={sex}
                        >
                            <option value="">Select one:</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className='common'>
                        <label>DOB</label>
                        <input 
                            type="text"
                            onChange={(e) => setDob(e.target.value)}
                            value={dob}
                        />
                    </div>
                    <div className='common'>
                        <label>Place Of Birth</label>
                        <input 
                            type="text"
                            onChange={(e) => setPlaceOfBirth(e.target.value)}
                            value={placeOfBirth}
                        />
                    </div>
                </div>
                <div className='part1'>
                    <div className='common'>
                        <label>Address</label>
                        <input 
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        />
                    </div>
                    <div className='common'>
                        <label>City</label>
                        <input 
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </div>
                    <div className='common'>
                        <label>State</label>
                        <input 
                            type="text"
                            onChange={(e) => setState(e.target.value)}
                            value={state}
                        />
                    </div>
                    <div className='common'>
                        <label>Pincode</label>
                        <input 
                            type="text"
                            onChange={(e) => setPincode(e.target.value)}
                            value={pincode}
                        />
                    </div>
                    <div className='common'>
                        <label>Phone Number</label>
                        <input 
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                        />
                    </div>
                </div>
                <div className='part1'>
                    <div className='common'>
                        <label>Passport Number</label>
                        <input 
                            type="text"
                            onChange={(e) => setPassportNumber(e.target.value)}
                            value={passportNumber}
                        />
                    </div>
                    <div className='common'>
                        <label>Passport Issue Date</label>
                        <input 
                            type="text"
                            onChange={(e) => setPassportDateIssue(e.target.value)}
                            value={passportDateIssue}
                        />
                    </div>
                    <div className='common'>
                        <label>Passport Expiry Date</label>
                        <input 
                            type="text"
                            onChange={(e) => setPassportDateExpiry(e.target.value)}
                            value={passportDateExpiry}
                        />
                    </div>
                    <div className='common'>
                        <label>Tenth Score</label>
                        <input 
                            type="text"
                            onChange={(e) => setTenthScore(e.target.value)}
                            value={tenthScore}
                        />
                    </div>
                    <div className='common'>
                        <label>Tenth Score Schema</label>
                        <input 
                            type="text"
                            onChange={(e) => setTenthScoreSchema(e.target.value)}
                            value={tenthScoreSchema}
                        />
                    </div>
                </div>
                <div className='part1'>
                    <div className='common'>
                        <label>Tenth Board</label>
                        <input 
                            type="text"
                            onChange={(e) => setTenthBoard(e.target.value)}
                            value={tenthBoard}
                        />
                    </div>
                    <div className='common'>
                        <label>Tenth School Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setTenthSchoolName(e.target.value)}
                            value={tenthSchoolName}
                        />
                    </div>
                    <div className='common'>
                        <label>Tenth School Address</label>
                        <input 
                            type="text"
                            onChange={(e) => setTenthSchoolAddress(e.target.value)}
                            value={tenthSchoolAddress}
                        />
                    </div>
                    <div className='common'>
                        <label>Tenth Passing Date</label>
                        <input 
                            type="text"
                            onChange={(e) => setTenthPassingDate(e.target.value)}
                            value={tenthPassingDate}
                        />
                    </div>
                    <div className='common'>
                        <label>Twelth Score</label>
                        <input 
                            type="text"
                            onChange={(e) => setTwelthScore(e.target.value)}
                            value={twelthScore}
                        />
                    </div>
                </div>
                <div className='part1'>
                    <div className='common'>
                        <label>Twelth Score Schema</label>
                        <input 
                            type="text"
                            onChange={(e) => setTwelthScoreSchema(e.target.value)}
                            value={twelthScoreSchema}
                        />
                    </div>
                    <div className='common'>
                        <label>Twelth Board</label>
                        <input 
                            type="text"
                            onChange={(e) => setTwelthBoard(e.target.value)}
                            value={twelthBoard}
                        />
                    </div>
                    <div className='common'>
                        <label>Twelth School Name</label>
                        <input 
                            type="text"
                            onChange={(e) => setTwelthSchoolName(e.target.value)}
                            value={twelthSchoolName}
                        />
                    </div>
                    <div className='common'>
                        <label>Twelth School Address</label>
                        <input 
                            type="text"
                            onChange={(e) => setTwelthSchoolAddress(e.target.value)}
                            value={twelthSchoolAddress}
                        />
                    </div>
                    <div className='common'>
                        <label>Twelth Passing Date</label>
                        <input 
                            type="text"
                            onChange={(e) => setTwelthPassingDate(e.target.value)}
                            value={twelthPassingDate}
                        />
                    </div>
                </div>
                <div className='part1 lasting'>
                    <div className='common'>
                        <label>Marital Status</label>
                        <select 
                            id='maritalStatus'
                            onChange={(e) => setMaritalStatus(e.target.value)}
                            value={maritalStatus}
                        >
                            <option value="">Select a Status:</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="separated">Separated</option>
                            <option value="divorced">Divorced</option>
                            <option value="widow(er)">Widow(er)</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='common'>
                        <label>Visa Type</label>
                        <select 
                            id='visaType'
                            onChange={(e) => setVisaType(e.target.value)}
                            value={visaType}
                        >
                            <option value="">Select a Type:</option>
                            <option value="study">Study</option>
                            <option value="work">Work</option>
                            <option value="visitor">Visitor</option>
                        </select>
                    </div>
                    <div className='common'>
                        <label>Office</label>
                        <select 
                            id='office'
                            onChange={(e) => setOffice(e.target.value)}
                            value={office}
                        >
                            <option value="">Select one:</option>
                            <option value="tci immigration">TCI Immigration Services</option>
                            <option value="town centre immigration">Town Centre Immigration</option>
                        </select>
                    </div>
                    <div className='common'>
                        <label>Case Status</label>
                        <select 
                            id='caseStatus'
                            onChange={(e) => setCaseStatus(e.target.value)}
                            value={caseStatus}
                        >
                            <option value="">Select a Status:</option>
                            <option value="to do">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="processing">Processing</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                </div>
                <div className='part1 part2'>
                    <div className='textarea1'>
                        <label>Work Experience</label>
                        <textarea 
                            type="text"
                            onChange={(e) => setWorkExperience(e.target.value)}
                            value={workExperience}
                            className='desc-text text-desc'
                        />
                    </div>
                </div>
                <div className='submit-btn'>
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile