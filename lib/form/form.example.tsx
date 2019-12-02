import React from 'react';
import Form, {FormValue} from './form';
import {useState, Fragment} from 'react';

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const onSubmit = (e: React.FormEvent) => {
        console.log(formData);
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
        />
    );
};

export default FormExample;