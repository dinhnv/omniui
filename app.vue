<template>
<div class="min-h-screen bg-white dark:bg-black flex items-center justify-center">
    <ThemeSwitcher />
    
    <div class="p-2 flex space-x-2">
        <Button icon="pi pi-check" aria-label="Filter" />
        <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" severity="success" aria-label="Search" />
        <Button icon="pi pi-user" severity="info" aria-label="User" />
        <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
        <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
        <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />

        <Button icon="pi pi-check" rounded aria-label="Filter" />
        <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
        <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
        <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
        <Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
        <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
        <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />

        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="8" badgeClass="p-badge-danger" outlined />
    </div>
</div>
</template>
