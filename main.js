/* //submit request form and generate ticket
function SubmitSupportRequest(formData) {
    // Call the server to submit the form data
    // Server responds with a support ticket summary
    // Example: const ticketSummary = server.submitSupportRequest(formData);
    // Return the ticket summary to the main program
    return ticketSummary;
}

//print support ticket
function PrintTicketSummary(ticketSummary) {
    // Print the ticket summary for the user
    console.log(ticketSummary);
    // Example: printer.printTicketSummary(ticketSummary);
    // No return value needed for this function
}

//search for existing open support tickets by name 
function SearchTicketsByName(name) {
    // Call the server to search for tickets by name
    // Server responds with a list of matching tickets
    // Example: const matchingTickets = server.searchTicketsByName(name);
    // Return the matching tickets to the main program
    return matchingTickets;
}

//search for existing open support tickets by ticket number
function SearchTicketsByNumber(ticketNumber) {
    // Call the server to search for a ticket by number
    // Server responds with the matching ticket
    // Example: const matchingTicket = server.searchTicketsByNumber(ticketNumber);
    // Return the matching ticket to the main program
    return matchingTicket;
} */

 // Simulated server object for demonstration purposes
 const server = {
    submitSupportRequest: (formData) => {
        // Simulated server response for submitting support request
        return {
            ticketNumber: 'TK12345',
            summary: 'Support ticket created successfully.'
        };
    },
    searchTicketsByName: (name) => {
        // Simulated server response for searching tickets by name
        return [
            {
                ticketNumber: 'TK12345',
                summary: 'Issue with network connectivity.'
            },
            {
                ticketNumber: 'TK67890',
                summary: 'Software installation problem.'
            }
        ];
    },
    searchTicketsByNumber: (ticketNumber) => {
        // Simulated server response for searching ticket by number
        return {
            ticketNumber: 'TK12345',
            summary: 'Issue with network connectivity.'
        };
    }
};

function SubmitSupportRequest(formData) {
    // Call the server to submit the form data
    const ticketSummary = server.submitSupportRequest(formData);
    // Return the ticket summary to the main program
    return ticketSummary;
}

function PrintTicketSummary(ticketSummary) {
    // Print the ticket summary for the user
    console.log(ticketSummary);
}

function SearchTicketsByName(name) {
    // Call the server to search for tickets by name
    const matchingTickets = server.searchTicketsByName(name);
    // Return the matching tickets to the main program
    return matchingTickets;
}

function SearchTicketsByNumber(ticketNumber) {
    // Call the server to search for a ticket by number
    const matchingTicket = server.searchTicketsByNumber(ticketNumber);
    // Return the matching ticket to the main program
    return matchingTicket;
}

// Event listener for form submission
document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        issueDescription: document.getElementById('issueDescription').value
    };

    // Call SubmitSupportRequest function with form data
    const submittedTicket = SubmitSupportRequest(formData);

    // Print the ticket summary
    PrintTicketSummary(submittedTicket);
});

// Event listener for searching tickets by name
function searchTicketsByName() {
    const name = document.getElementById('searchByName').value;
    const searchResultByName = SearchTicketsByName(name);
    console.log(searchResultByName);
}

// Event listener for searching tickets by number
function searchTicketsByNumber() {
    const ticketNumber = document.getElementById('searchByNumber').value;
    const searchResultByNumber = SearchTicketsByNumber(ticketNumber);
    console.log(searchResultByNumber);
}
