import Image from 'next/image';
import c17 from '../../../public/clients/c17.jpg';
import c18 from '../../../public/clients/c18.jpg';
import c19 from '../../../public/clients/c19.png';
import c20 from '../../../public/clients/c20.jpg';
import c21 from '../../../public/clients/c21.jpg';

const BusinessIntelligence = () => {
    return (
      <div className="text-center py-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-3xl font-bold mb-4">
            BUSINESS INTELLIGENCE AND ANALYTICS
          </div>
          <p className="text-lg mb-10">
            <span className="font-bold text-red-600">Business intelligence (BI)</span> leverages software and services to transform data into actionable insights that inform an organization’s strategic and tactical business decisions. BI tools access and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs, charts, and maps to provide users with detailed intelligence about the state of the business.
          </p>
          <div className="bg-gray-100 py-10">
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
                <div className="md:w-1/2 p-5">
                  <p className="text-red-600 font-bold mb-2">
                    Our ultimate goal of BI initiatives is to drive better business decisions that enable organizations to increase revenue, improve operational efficiency and gain competitive advantages over business rivals.
                  </p>
                  <p>
                    To achieve that goal, BI incorporates a combination of analytics, data management and reporting tools, plus various methodologies for managing and analyzing data.
                  </p>
                </div>
                <div className="md:w-1/2 p-5">
                  <Image src={c18} alt="Business Intelligence" className="mt-5 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center max-w-4xl mx-auto">
                <div className="md:w-1/2 p-5">
                  <p className="text-red-600 font-bold mb-2">
                    BI data can include historical information and real-time data gathered from source systems as it’s generated, enabling BI tools to support both strategic and tactical decision-making processes.
                  </p>
                  <p>
                    Before it’s used in BI applications, raw data from different source systems generally must be integrated, consolidated, and cleansed using data integration and data quality management tools to ensure that BI teams and business users are analyzing accurate and consistent information.
                  </p>
                </div>
                <div className="md:w-1/2 p-5">
                  <Image src={c17} alt="Data Management" className="mt-5 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BusinessIntelligence;