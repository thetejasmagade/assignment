<template>
    <div class="container mx-auto px-4 py-2">
        <h4 class="pt-4">Results</h4>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(res, i) in $store.state.data" :key="i">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ res.name }}</td>
                    <td>{{ res.phone }}</td>
                    <td>{{ res.email }}</td>
                    <td>{{ res.address }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>