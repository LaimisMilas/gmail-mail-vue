import axios from "axios";

export default {
    namespaced: true,
    state: {
        reservations: [],
        reservation: {
            id: 0,
            eventTime: "",
            status: 0,
            customer: {firstName: ""},
            services: [{title: "", description: ""}],
            reminders: [{}]
        }
    },
    getters: {
        header: state => {
            //console.info("      reservation.getters.header, run");
            //console.info("getters.header", JSON.stringify(state));
            return {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.login.token
                }
            }
        }
    },
    actions: {
        fetchData({ state, commit, rootState }) {
            console.info("      reservation.actions.fetchData, run");
            //console.info("fetchData, state ", JSON.stringify(state));
            //console.info("fetchData, rootState ", JSON.stringify(rootState));
            axios
                .get(rootState.baseUrl + "/api/reservations", this.getters.header)
                .then(resp => {
                    this.commit('reservation/commitReservations', resp.data);
                    if (state.reservations.length > 0) {
                        var events = [];
                        state.reservations.forEach(reservation => {

                            var color = reservation.status === 1? '#9B1560': '#4432e5';

                            var event = {
                                title: reservation.customer.firstName,
                                start: reservation.eventTime,
                                id: reservation.id,
                                color: color
                            };
                            events.push(event);
                        });
                        this.commit('calendar/commitEvents', events);
                    }
                });
        },
        create({ state, commit, rootState }) {
            // var result = moment(String(this.reservation.eventTime)).format("YYYY-MM-DD'T'HH:mm:ss");
            // var result = moment(String(this.reservation.eventTime)).format("YYYY-MM-DD");
            // console.info(result);
            // this.reservation.eventTime = result;
            // console.info(this.reservation.eventTime);
            // console.info(JSON.stringify(this.reservation));
            axios
                .post(rootState.baseUrl + "/api/reservations", state.reservation, this.getters.header)
                .then(resp => {
                    this.dispatch('reservation/fetchData');
                });
        },
        updateReservation({ state, commit, rootState }) {
            //console.info("      reservation.actions.updateReservation, run");
            //console.info("      reservation.actions.updateReservation, state ", JSON.stringify(state.reservation));
            axios
                .put(rootState.baseUrl + "/api/reservations", state.reservation, this.getters.header)
                .then(resp => {
                    this.dispatch('reservation/fetchData');
                });
        },
        updateStatus({ state, commit, rootState }, status) {
            console.info("      reservation.actions.updateStatus, run");
            //console.info("      reservation.actions.updateStatus, state ", JSON.stringify(status));
            //console.info("      reservation.actions.updateStatus, state ", JSON.stringify(state.reservation));
            state.reservation.status = status;
            axios.put(rootState.baseUrl + "/api/reservations", state.reservation, this.getters.header)
                .then(resp => {
                    this.dispatch('reservation/fetchData');
                });
        },
        deleteReservation({ state, commit, rootState }) {
            axios
                .delete(rootState.baseUrl + "/api/reservations/" + state.reservation.id, this.getters.header)
                .then(resp => {
                    this.dispatch('reservation/fetchData');
                });
        }
    },
    mutations: {
        commitReservations(state, reservations) {
            //console.info("      reservation.mutations.commitReservations, run");
            //console.info("reservation.mutations.commitReservations, state ", JSON.stringify(state));
            //console.info("reservation.mutations.commitReservations, reservations ", JSON.stringify(reservations));
            state.reservations = reservations;
        },
        commitReservation(state, reservation) {
            //console.info("      reservation.mutations.commitReservation, run");
            //console.info("reservation.mutations.commitReservations, state ", JSON.stringify(state));
            //console.info("reservation.mutations.commitReservations, reservations ", JSON.stringify(reservations));
            state.reservation = reservation;
        },
        commitResetReservation(state) {
            //console.info("      reservation.mutations.commitResetReservation, run");
            //console.info("reservation.mutations.commitResetReservation, state ", JSON.stringify(state));
            //console.info("reservation.mutations.commitResetReservation, reservations ", JSON.stringify(reservations));
            state.reservation = {
                id: 0,
                eventTime: "",
                status: 0,
                customer: {},
                services: [],
                reminders: []
            };
        }
    }
}
