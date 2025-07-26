import {useState} from 'react'
import FileUploader from '~/components/FileUploader'
import Navbar from '~/components/Navbar'

const upload = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
            <h1>Smart feedback of your Resume for your Dream Job</h1>
            {
                isProcessing ? (
                    <>
                    <h2>{statusText}</h2>
                    <img src='/images/resume-scan.gif' className='w-full'/>
                    </>
                ) : (
                    <h2>Drop your resume for an ATS score & improvement tips</h2>
                )
            }
            {
                !isProcessing && (
                    <form id="upload-form" onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                        <div className="form-div">
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" name="company-name" id="company-name" placeholder='Company Name' required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="job-title">Job Tille</label>
                            <input type="text" name="job-title" id="job-title" placeholder='Job Title' required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="job-description">Job Description</label>
                            <textarea rows={5} name="job-description" id="job-description" placeholder='Job Description' required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="uploader">Upload Your Resume</label>
                            <FileUploader/>
                        </div>
                        <button type="submit" className='primary-button'>Analyz Resume</button>
                    </form>
                )
            }
        </div>
      </section>
    </main>
  )
}

export default upload