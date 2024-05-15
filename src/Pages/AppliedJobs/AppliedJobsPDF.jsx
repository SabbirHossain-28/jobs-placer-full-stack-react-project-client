
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import PropTypes from "prop-types"

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "column",
//     padding: 20,
//   },
//   section: {
//     marginBottom: 10,
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "#000",
//     paddingBottom: 5,
//     marginBottom: 5,
//   },
//   headerCell: {
//     width: "12.5%",
//     fontWeight: "bold",
//   },
//   cell: {
//     width: "12.5%",
//   },
// });

// const AppliedJobsPDF = ({ appliedJobsData }) => {
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text style={styles.header}>Applied Jobs Summary</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.headerCell}>Job Title</Text>
//           <Text style={styles.headerCell}>Job Category</Text>
//           <Text style={styles.headerCell}>Employer Email</Text>
//           <Text style={styles.headerCell}>Applicant Email</Text>
//           <Text style={styles.headerCell}>Salary</Text>
//           <Text style={styles.headerCell}>Posting Date</Text>
//           <Text style={styles.headerCell}>Deadline</Text>
//         </View>
//         {appliedJobsData.map((listData, idx) => (
//           <View style={styles.row} key={idx}>
//             <Text style={styles.cell}>{listData.jobTitle}</Text>
//             <Text style={styles.cell}>{listData.jobCategory}</Text>
//             <Text style={styles.cell}>{listData.jobPosterEmail}</Text>
//             <Text style={styles.cell}>{listData.userEmail}</Text>
//             <Text style={styles.cell}>{listData.salaryRange}</Text>
//             <Text style={styles.cell}>{listData.jobPostingDate}</Text>
//             <Text style={styles.cell}>
//               {new Date(listData.applicationDeadline).toLocaleDateString()}
//             </Text>
//           </View>
//         ))}
//       </Page>
//     </Document>
//   );
// };

// AppliedJobsPDF.propTypes={
//     appliedJobsData:PropTypes.node
// }
// export default AppliedJobsPDF;
