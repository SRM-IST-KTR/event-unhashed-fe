export const REGISTRATION_INPUTS = [
  {
    name: "firstName",
    label: "First Name",
    id: "firstName",
    type: "text",
    placeholder: "John",
    required: true,
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    id: "lastName",
    type: "text",
    placeholder: "Doe",
    required: true,
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "email",
    label: "College email-id",
    id: "email",
    type: "email",
    placeholder: "ab1234@srmist.edu.in",
    required: true,
    description: "As per your ID card",
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "phone",
    label: "Contact Number",
    id: "phone",
    type: "number",
    placeholder: "9899xxxxxx",
    required: true,
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "yearOfGrad",
    label: "Graduation Year",
    id: "yearOfGrad",
    type: "number",
    placeholder: 2025,
    required: true,
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "regNo",
    label: "Registration Number",
    id: "regNo",
    type: "text",
    placeholder: "RA21xxxxxxxxxx",
    required: false,
    description: "Only for SRM Students. As per your ID card.",
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "department",
    label: "Department",
    id: "department",
    type: "text",
    placeholder: "NWC",
    required: false,
    description: "Only for SRM Students. With the Specialization.",
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
];

export const FEEDBACK_INPUTS = [
  {
    name: "email",
    label: "College email-id",
    id: "email",
    type: "email",
    placeholder: "ab1234@srmist.edu.in",
    required: true,
    description: "As per your ID card",
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "thoughts",
    label: "Thoughts on the event",
    id: "thoughts",
    type: "textarea",
    placeholder: "Thoughts",
    required: true,
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "exp_gained",
    label: "How was your Experience",
    id: "exp_gained",
    type: "textarea",
    placeholder: "Experience",
    required: true,
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
  {
    name: "recommendations",
    label: "Recommendations",
    id: "recommendations",
    type: "textarea",
    placeholder: "Recommendations",
    required: true,
    classNames: {
      input: "p-4 text-lg text-black rounded-2xl",
      label: "text-xl py-4",
      wrapper: "w-full flex flex-col mb-4",
    },
  },
];
