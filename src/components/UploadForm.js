"use client"

import UploadIcon from "@/components/UploadIcon"

import axios from "axios"

const UploadForm = () => {
  const upload = async (e) => {
    e.preventDefault()
    const files = e.target.files
    console.log(files)
    if (files.length > 0) {
      const file = files[0]
      const res = await axios.post("/api/upload", {
        file
      })
      console.log(res.data)
    }
  }

  return (
    <label className="bg-white py-3 px-8 rounded-lg text-black tracking-[-0.3px] font-bold flex gap-2 cursor-pointer">
      <UploadIcon />
      <span>Choose file</span>
      <input onChange={upload} type="file" className="hidden" />
    </label>
  )
}

export default UploadForm
