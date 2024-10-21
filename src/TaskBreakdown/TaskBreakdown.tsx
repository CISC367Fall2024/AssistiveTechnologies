import React from "react";
import { useState } from "react";
import { Form, Button} from "react-bootstrap";


export function TaskInput(): JSX.Element {
    const [taskAttribute, setTaskAttribute] = useState("");
    const [responseAttribute, setResponseAttribute] = useState<string | null>(null)
    const apiKey = process.env.REACT_APP_OPEN_AI_API_KEY;
    

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const taskValue = event.target.value;
        setTaskAttribute(taskValue);
    };

    const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
              },
              body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: taskAttribute+". Break this task down into multiple steps" }],
              }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
              }

            const data = await response.json();
      setResponseAttribute(data.choices[0].message.content);
      setTaskAttribute('');
    } catch (error) {
      console.error('Error fetching response:', error);
    }
};

    return (
        <div>
            <Form onSubmit = {formSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={taskAttribute}
                    onChange={inputChange}
                    placeholder="Enter a task to breakdown"
                    />
                    <Button type="submit"
                >Press Me</Button>
            </Form.Group>
            </Form>
            {responseAttribute && <div className="response">{responseAttribute}</div>}
        </div>
    );
}
