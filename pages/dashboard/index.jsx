import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Dashboard = ({ data }) => {
  // console.log(data);

  return (
    <>
      <div className="db-col-outer">
        <h1 className="db-inner-title">Enquiries</h1>
        <div className="db-col-inner">
          <div className="db-main">
            <div className="db-filter">
              <span>
                <i class="fa-solid fa-filter"></i> Filters 0
              </span>
              <div className="icons">
                <p>1-50 of 10400</p>
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div className="db-table-wrapper">
              <table id="table">
                <tr>
                  <th>
                    <input className="checkbox" type="checkbox" /> Date
                  </th>
                  <th>Status</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Test</th>
                  <th>Countries</th>
                  <th>Mobile</th>
                  <th>City</th>
                  <th>Course</th>
                </tr>
                {data?.map((v) => {
                  return (
                    <tr>
                      <td>
                        <input className="checkbox" type="checkbox" /> {v.id}
                      </td>
                      <td className="t-dot">{v.username}</td>
                      <td className="t-name">{v.name}</td>
                      <td>Web</td>
                      <td>
                        <i class="fa-solid fa-xmark"></i>
                      </td>
                      <td>{v?.address.city}</td>
                      <td>{v?.address?.zipcode}</td>
                      <td>{v?.address?.street}</td>
                      <td>{v?.address?.suite}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <ReactHTMLTableToExcel
            className="tableBtn"
            buttonText="Export Excel File"
            table="table"
            filename="Enquires Table"
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { data } };
}
