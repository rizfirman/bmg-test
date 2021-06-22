import React, { useState } from 'react'
import { useForm, useStep, } from 'react-hooks-helper'
import InformationA from '../../components/InformationA'
import InformationB from '../../components/InformationB'
import { ReviewForm } from '../../components/ReviewForm'
import SubmitForm from '../../components/SubmitForm'

const defaultData = {
    firstName: "",
    lastName: "",
    jobdesc: "",
    gender: { gender1: 'male', gender2: 'female' },
    email: "",
    pc: "",
    address: "",
    mobile: "",

}

const steps = [
    { id: 'informationA' },
    { id: 'informationB' },
    { id: 'review' },
    { id: 'submit' },
]

const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData)
    const [option, setOption] = useState()
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })


    const props = { formData, setForm, navigation, setOption };

    // eslint-disable-next-line default-case
    switch (step.id) {
        case 'informationA':
            return <InformationA {...props} />;
        case 'informationB':
            return <InformationB {...props} />;
        case 'review':
            return <ReviewForm {...props} />;
        case 'submit':
            return <SubmitForm {...props} />;
    }
    return (
        <div>

        </div>
    )
}

export default MultiStepForm
