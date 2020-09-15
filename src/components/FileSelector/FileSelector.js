import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const fileSelector = (props) => {
    let btn;
    if (!props.fileName || !props.fileContent) { btn=null}
    else {
        btn = <Button style={{ width: 'auto', marginTop: '16px' }}
            bsstyle="primary" onClick={() => props.deleteCommentsHandler()}>
            Remove Comments
                    </Button>
    }
    return (
        <Card style={{ width: '25rem', margin: '0 auto', marginTop: '16px' }}>
            <Card.Header className="text-center">
                <h2>Please choose a file</h2>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.File
                        id="custom-file"
                        label="Choose txt file"
                        custom
                        onChange={(e) => props.onChange(e)}
                    />
                </Form>
                {btn}
            </Card.Body>
        </Card>
    );
}

export default fileSelector;