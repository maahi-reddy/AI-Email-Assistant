// import { useEffect, useState } from "react";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/")
//       .then(res => res.json())
//       .then(data => setMessage(data.message));
//   }, []);

//   return (
//     <div style={{ padding: "30px" }}>
//       <h1>AI Email Assistant</h1>
//       <h2>{message}</h2>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [email, setEmail] = useState("");

//   const generateEmail = async () => {
//     try {
//       console.log("Button clicked!");

//       const response = await fetch("http://127.0.0.1:5000/generate-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt }),
//       });

//       const data = await response.json();

//       console.log(data);

//       setEmail(data.email);
//     } catch (error) {
//       console.error(error);
//       alert("Error: " + error.message);
//     }
//   };

//   return (
//     <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
//       <h1>AI Email Assistant</h1>

//       <textarea
//         rows="5"
//         cols="70"
//         placeholder="Enter your email prompt..."
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={generateEmail}>
//         Generate Email
//       </button>

//       <br /><br />

//       <textarea
//         rows="15"
//         cols="70"
//         value={email}
//         readOnly
//       />
//     </div>
//   );
// }

// export default App;
// import {useState} from "react";
// import  {jsPDF} from "jspdf";

// function App(){
//   const [prompt,setPrompt]=useState("");
//   const [email,setEmail]=useState("");
//   const [loading,setLoading]=useState(false);
//   const[task,setTask]=useState("Generate Email");
//   const [tone,setTone]=useState("Professional");
//   const [length,setLength]=useState("Medium");
//   const copyToClipboard = async () => {
//   try {
//     await navigator.clipboard.writeText(email);
//     alert("Email copied to clipboard!");
//   } catch (error) {
//     console.error(error);
//     alert("Failed to copy!");
//   }
// };
// const downloadPDF=()=>{
//   if(!email){
//     alert("No email to download!");
//     return;
//   }
//   const doc=new jsPDF();
//   const lines=doc.splitTextToSize(email,180);
//   doc.text(lines,10,10);
//   doc.save("ai-email.pdf");
// };

//   const generateEmail=async()=>{
//     setLoading(true);
//     try{
//       const respone=await fetch("http://127.0.0.1:5000/generate-email",{
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json",
//         },
//         body:JSON.stringify({
//           prompt,task,tone,length,
//         }),
//       });
//       const data=await respone.json();
//       if(data.error){
//         alert(data.error);
//       }
//       else{
//         setEmail(data.email);
//       }
//     }
//     catch(err){
//       alert(err.message);
//     }
//     setLoading(false);
//   };
//   return (
//     <div className="container mt-5">
//       <div className="card shadow p-4">
//         <h2 className="text-center mb-4">
//           AI Email Assistant
//         </h2>
//         <div className="mb-3">
//           <label className="form-label">Task</label>
//           <select className="form-select" value={task} onChange={(e)=>setTask(e.target.value)}>
//             <option>Generate Email</option>
//             <option>Reply Email</option>
//             <option>Summarize Email</option>
//             <option>Rewrite Email</option>
//             <option>Improve Grammar</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Tone</label>
//           <select className="form-select" value={tone} onChange={(e)=>setTone(e.target.value)}>
//             <option>Professional</option>
//             <option>Friendly</option>
//             <option>Formal</option>
//             <option>Casual</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Length</label>
//           <select className="form-select" value={length} onChange={(e)=>setLength(e.target.value)}>
//             <option>Short</option>
//             <option>Medium</option>
//             <option>Long</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Describe what you need</label>
//           <textarea className="form-control"
//           rows="6"
//           value={prompt}
//           onChange={(e)=>setPrompt(e.target.value) } ></textarea>
//         </div>
//         <button
//           className="btn btn-primary"
//           onClick={generateEmail}
//           disabled={loading}
//         >
//            {loading ? "Generating..." : "Generate"}
//         </button>
//           <hr />

//  <h4>Result</h4>

//         <textarea
//           className="form-control"
//           rows="12"
//           value={email}
//           readOnly
//         />
//         <br /><br />

// <button onClick={copyToClipboard}>
//   Copy Email
// </button>
// <button className="btn btn-danger mt-2" onClick={downloadPDF}>Download as PDF</button>

//       </div>
//     </div>
    
//   );
// }
// export default App;
import { useState } from "react";
import { jsPDF } from "jspdf";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState("Generate Email");
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");
  const [subject,setSubject]=useState("");
  const [toEmail,setToEmail]=useState("");

  const copyToClipboard = async () => {
    try {
      const content=`Subject: ${subject}\n\n${email}`;
      await navigator.clipboard.writeText(content);
      alert("Email copied to clipboard!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy!");
    }
  };

  const downloadPDF = () => {
    if (!email) {
      alert("No email to download!");
      return;
    }
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(email, 180);
    doc.text(lines, 10, 10);
    doc.save("ai-email.pdf");
  };

  const generateEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/generate-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, task, tone, length ,subject,to_email:toEmail}),
      });
      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        // setSubject(data.subject);
        // setEmail(data.email);
        setSubject(data?.subject || data?.gemini_result?.subject || "");
        setEmail(data?.email || data?.gemini_result?.email || "");
      }
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };
  const sendEmail = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/send_email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to_email: toEmail,
        subject,
        content: email
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email");
    }

  } catch (err) {
    alert(err.message);
  }
};


  return (
    <div className="envelope-app">
      <div className="letter-sheet">
        <div className="letterhead">
          <div>
            <h1 className="letterhead-title">AI Email Assistant</h1>
            <div className="letterhead-sub">Drafted by request &middot; Delivered in seconds</div>
          </div>
          <div className="postmark">
            CORRESPONDENCE<br />DEPT.
          </div>
        </div>

        <div className="letter-body">
          <div className="controls-col">
            <div className="field">
              <label className="field-label">Task</label>
              <select className="field-select" value={task} onChange={(e) => setTask(e.target.value)}>
                <option>Generate Email</option>
                <option>Reply Email</option>
                <option>Summarize Email</option>
                <option>Rewrite Email</option>
                <option>Improve Grammar</option>
              </select>
            </div>

            <div className="field">
              <label className="field-label">Tone</label>
              <select className="field-select" value={tone} onChange={(e) => setTone(e.target.value)}>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Formal</option>
                <option>Casual</option>
              </select>
            </div>

            <div className="field">
              <label className="field-label">Length</label>
              <select className="field-select" value={length} onChange={(e) => setLength(e.target.value)}>
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
              </select>
            </div>
            <div className="field">
              <lable className="field-label">Subject(Optional)</lable>
              <input type="text"
              className="form-control"
              placeholder="Leave empty to let AI generate one"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
              />
            </div>

            <div className="field">
              <label className="field-label">Describe what you need</label>
              <textarea
                className="field-textarea"
                rows="6"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Ask my landlord for a maintenance visit next week"
              />
            </div>
            <div className="field">
  <label className="field-label">To Email</label>
  <input
    type="email"
    className="form-control"
    placeholder="example@gmail.com"
    value={toEmail}
    onChange={(e) => setToEmail(e.target.value)}
  />
</div>

            <button className="stamp-button" onClick={generateEmail} disabled={loading}>
              {loading ? "Drafting..." : "Generate"}
            </button>
          </div>

          <div className="letter-divider" />

          <div className="result-col">
            <div className="result-heading">
              <h4>Result</h4>
              <span className="result-count">{(email|| "").length} characters</span>
            </div>
            {subject && <h5>Subject:{subject}</h5>}
            
            

            {/* <div className="field">
                 <label className="field-label">Generated Subject</label>
                   <input
                    type="text"
                    className="result-paper"
                    value={subject}
                    readOnly
                   />
              </div> */}

<br />

            <textarea
              className="result-paper"
              rows="12"
              value={email}
              readOnly
              placeholder="Your drafted email will appear here once generated..."
            />

            <div className="result-actions">
              <button className="ghost-button" onClick={copyToClipboard}>Copy Email</button>
              <button className="ghost-button sage" onClick={downloadPDF}>Download as PDF</button>
              <button
  className="ghost-button sage"
  onClick={sendEmail}
  disabled={!email || !toEmail}
>
  Send Email
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

