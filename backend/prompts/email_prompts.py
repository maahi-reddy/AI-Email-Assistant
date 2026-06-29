def build_prompt(prompt,task,tone,length,subject):
    if subject.strip():
        subject_instruction=f"""
        Use this subject exactly as provided:
        Subject:{subject}
        Do not change the subject.
        """
    else:
        subject_instruction=""""
    Generate a suitable subject line for this email.
    """
    return f"""
You are an expert AI Email Assisant.
TASK:
{task}

TONE:
{tone}

LENGTH:
{length}

{subject_instruction}


INSTRUCTIONS:
- Follow the task strictly
- Adjust tone accordingly
- Adjust length (Short = 5-6 lines, Medium = normal, Long = detailed)
- Do not add explanations
- Return only final output

USER INPUT:
{prompt}
Return the response in this format:
Subject:
<subject here>

Body:
<email body here>
"""