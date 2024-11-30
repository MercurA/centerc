import { google } from 'googleapis';

async function getCalendar(session) {
    if (!session) {
    return new Response(JSON.stringify({ message: 'Not authenticated' }), {
        status: 401,
    });
    }

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: session.accessToken });

    const calendar = google.calendar({ version: 'v3', auth });

    try {
        const response = await calendar.events.list({
            calendarId: 'primary',
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        });

        return response.data;
    } catch (error) {
    return new Response(
        JSON.stringify({ message: 'Error fetching calendar events' }),
        { status: 500 }
    );
    }
}

export {
    getCalendar
}