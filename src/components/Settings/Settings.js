import React, {useContext} from "react";
import { AppContext } from "../../App";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const Settings = () => {
    const {
        firstName,
        lastName,
        setFirstName,
        setLastName,
    } = useContext(AppContext);

    const changeFirstName = (value) => {
        setFirstName(value);
    }

    const changeLastName = (value) => {
        setLastName(value);
    }

    const initialValues = {
        firstName: firstName,
        lastName: lastName,
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .max(20, '* Must be a maximum of 20 alphanumeric characters')
            .matches(
                /[A-Za-z0-9]+/,
                "Must be an alphanumeric value"
            ),
        lastName: Yup.string()
            .max(20, '* Must be a maximum of 20 alphanumeric characters')
            .matches(
                /[A-Za-z0-9]+/,
                "Must be an alphanumeric value"
            ),
    });

    const handleFormSubmit = (values, props) => {
        setFirstName(values.firstName);
        setLastName(values.lastName);
        props.setSubmitting(false);

    }

    return (
        <div className="componentRow">
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <Form>
                            <div className="formRow">
                                <Field as={FormControl} variant='outlined'>
                                    <Field as={TextField}
                                           required
                                           id="firstName"
                                           name="firstName"
                                           label="First Name"
                                           placeholder="First Name"
                                           helpertext={<ErrorMessage name={firstName} className="errorMessageText" />}
                                           inputProps={{
                                               maxLength: 20
                                           }}
                                           variant="outlined"
                                    />
                                </Field>
                            </div>
                            <div className="formRow">
                                <Field as={FormControl} variant='outlined'>
                                    <Field as={TextField}
                                           required
                                           id="lastName"
                                           name="lastName"
                                           label="Last Name"
                                           placeholder="Last Name"
                                           helpertext={<ErrorMessage name={lastName} className="errorMessageText" />}
                                           inputProps={{
                                               maxLength: 20
                                           }}
                                           variant="outlined"
                                    />
                                </Field>
                            </div>
                            <div className="formRow">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={props.isSubmitting}
                                    style={props.isSubmitting? {backgroundColor: '#b1b1b1'} : {backgroundColor: '#00095b'}}
                                >
                                    Update Name
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Settings;
