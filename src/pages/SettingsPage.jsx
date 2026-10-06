function SettingsPage() {
  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-slate-800/70 p-7 shadow-xl backdrop-blur-xl">
      <h2 className="mb-6 border-b border-white/10 pb-3 text-2xl font-semibold text-slate-100">
        System Settings
      </h2>

      <p className="text-slate-400">
        Configure user permissions and system preferences here.
      </p>

      <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-5">
        <h3 className="text-lg font-semibold text-white">System Preferences</h3>

        <p className="mt-2 text-sm text-slate-400">
          Manage your student management system settings.
        </p>
      </div>
    </div>
  );
}

export default SettingsPage;
