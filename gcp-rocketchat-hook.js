class Script {
  process_incoming_request({ request }) {
    // console is a global helper to improve debug
//     console.log(request.content);

    var incident = request.content.incident;

    var alertColor = "warning";
    if (incident.state === "closed") { alertColor = "good"; }
    else if (incident.state === "open") { alertColor = "danger"; }

    return {
      content: {
       username: "GCP Alert",
        text: "GCP Alert Notification",
        pretext: "Incident ID: " + incident.incident_id,
        attachments: [{
          title: incident.policy_name,
          title_link: incident.url,
          text: incident.condition_name,
          color: alertColor
        }]
       }
    };

    return {
       error: {
         success: false,
         message: 'Error'
       }
    };
  }
}
