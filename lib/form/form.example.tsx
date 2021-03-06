import React from 'react';
import Form, {FormValue} from './form';
import {useState, Fragment} from 'react';
import Validator, {noErrors} from './validator';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const [errors, setErrors] = useState({});
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(formData);
        const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 8, maxLength: 16},
            {key: 'username', pattern: /^[a-zA-Z0-9]*$/}
        ];
        const errors = Validator(formData, rules);
        if (noErrors(errors)) {
            // 没错
        } else {
            setErrors(errors);
        }
        console.log(errors);
    };
    return (
        <Form value={formData} fields={fields}
              buttons={
                  <Fragment>
                      <button type="submit">提交</button>
                      <button>返回</button>
                  </Fragment>
              }
              onSubmit={onSubmit}
              onChange={(newValue) => setFormData(newValue)}
              errors={errors}
        />
    );
};

export default FormExample;