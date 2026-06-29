def build_prompt(prompt, task, tone, length, subject):

    if subject.strip():
        subject_instruction = f"""
Use this subject exactly as provided:
Subject: {subject}

Do not modify the subject.
"""
    else:
        subject_instruction = """
Generate a suitable subject line for this email.
"""

    return f"""
You are an expert AI Email Assistant.

TASK:
{task}

TONE:
{tone}

LENGTH:
{length}

{subject_instruction}

INSTRUCTIONS:
- Follow the task exactly.
- Adjust the tone accordingly.
- Adjust the length:
  • Short = 5-6 lines
  • Medium = normal
  • Long = detailed
- Return a professional, natural-sounding email.
- Do NOT add explanations.
- Do NOT use Markdown.
- Do NOT use **, *, #, bullet points, or code blocks.
- Do NOT surround dates, names, addresses, or times with special characters.
- Return plain text only.
- The email should be ready to send without any formatting changes.

USER INPUT:
{prompt}

Return the response in exactly this format:

Subject:
<subject here>

Body:
<email body here>
"""